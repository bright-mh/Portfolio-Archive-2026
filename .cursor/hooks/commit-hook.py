#!/usr/bin/env python3
import sys
import json
import subprocess

data = json.load(sys.stdin)
prompt = data.get("prompt", "").strip()

# -commit 또는 -커밋 명령어가 아니면 그냥 통과
if not (prompt.startswith("-commit") or prompt.startswith("-커밋")):
    print(json.dumps({"permission": "allow"}))
    sys.exit(0)

# 변경사항 확인
try:
    git_status = subprocess.run(
        ["git", "status", "--short"],
        capture_output=True,
        text=True
    ).stdout.strip()

    git_diff = subprocess.run(
        ["git", "diff", "HEAD"],
        capture_output=True,
        text=True
    ).stdout[:4000]  # 너무 길면 자름

    # staged 변경사항도 포함
    git_diff_cached = subprocess.run(
        ["git", "diff", "--cached"],
        capture_output=True,
        text=True
    ).stdout[:2000]

    if git_diff_cached:
        git_diff = git_diff_cached + "\n" + git_diff

except Exception as e:
    print(json.dumps({"permission": "allow", "agent_message": f"/commit 명령 처리 중 오류: {e}"}))
    sys.exit(0)

# 커밋할 내용이 없을 때
if not git_status:
    print(json.dumps({
        "permission": "deny",
        "user_message": "커밋할 변경사항이 없습니다."
    }))
    sys.exit(0)

agent_message = f"""## 변경된 파일:
{git_status}

## 변경 내용 (diff):
{git_diff}
"""

print(json.dumps({
    "permission": "allow",
    "agent_message": agent_message
}, ensure_ascii=False))
