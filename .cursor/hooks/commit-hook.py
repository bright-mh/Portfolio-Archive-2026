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

agent_message = f"""사용자가 -commit 명령어를 입력했습니다. 아래 순서대로 정확히 진행해 주세요:

1. 변경사항을 분석해서 한글로 Conventional Commits 형식의 커밋 메시지를 작성
2. 커밋 메시지를 사용자에게 먼저 보여주기:
   예시) 커밋 메시지: `feat: Pretendard 폰트 적용`
3. 사용자에게 물어보기:
   "커밋하시겠습니까? (y 또는 Enter: 진행 / n: 취소)"
4. 사용자가 y, yes, 또는 빈 Enter를 입력하면:
   - `git add -A` 실행
   - 작성한 커밋 메시지로 `git commit` 실행
   - 커밋 완료 후 사용자에게 물어보기:
     "Push하시겠습니까? (y 또는 Enter: push / n: 취소)"
   - 사용자가 y, yes, 또는 빈 Enter를 입력하면 `git push origin main` 실행
   - n이면 "Push가 취소되었습니다." 출력
5. 3번에서 사용자가 n을 입력하면 "커밋이 취소되었습니다." 출력

## 변경된 파일:
{git_status}

## 변경 내용 (diff):
{git_diff}
"""

print(json.dumps({
    "permission": "allow",
    "agent_message": agent_message
}, ensure_ascii=False))
