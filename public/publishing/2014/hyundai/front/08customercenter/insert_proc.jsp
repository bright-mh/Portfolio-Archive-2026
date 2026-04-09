<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page import="java.util.*, java.sql.*"%>
<%@ page import="org.apache.commons.lang.*"	%>
<%@ page import="com.ckinterdream.ipark.*"%>
<%@ page import="com.ckinterdream.common.*"%>
<%@ page import="com.ckinterdream.common.db.*"%>
<%@ page import="com.ckinterdream.common.upload.*"%>
<%@ page import="org.apache.commons.fileupload.FileUploadException"%>

<%@ page import="com.rbipt.RB" %>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.HashMap"%>
<%-- <%@ page import="com.rbipt.FileUpload"%> --%>
<%@ page import="com.rbipt.service.Board2Service"%>
<%
	/* FileUpload multi = new FileUpload(request); 
	String grp_cd = multi.getParameter("grp_cd");
	Board2Service service = new Board2Service(application);
	HashMap<String,Object> result = null;
	/* result = service.insert (request, multi, application); */ 
	
  
 //	고객문의 글등록시 메일발송 S
 	     
			   
			    String pid = "qna";

				String mmmmm = request.getParameter("mode");
				if( mmmmm == null || mmmmm.length() == 0 ){
					mmmmm = "list";
				}
			    int mode = PageListUtil.getModeType(mmmmm);

			    String includePage = "/kr/include/view/qna.write_new.jsp";
			    
			    request.setAttribute("pid", pid);
			    
			        String referer = StringUtils.defaultString(request.getHeader("REFERER")).toLowerCase();
			        try {
			        	int maxPostSize = 1024 * 1024; // 최대 업로드 크기
			            String saveDirectory = BoardControl.getUploadPath(pid, application.getRealPath("/")); // 첨부파일 저장경로
			            FileUtil.mkDirs(saveDirectory);
						out.println(saveDirectory);
			            FileUpload multi = new FileUpload(request, saveDirectory, maxPostSize, "UTF-8", new DefaultFileRenamePolicy(), false);
			            String fileOriginalName = multi.getFilesystemName("filename");
			            
			            if(StringUtils.isNotBlank(fileOriginalName)) {
			                String fileExt = FileUtil.getFileExtension(fileOriginalName);
			                if(",jpg,png,tif,gif,xls,doc,ppt,hwp,txt,".indexOf(","+fileExt+",")<0) {
			                    JavascriptUtil.back(response, "업로드가 허용되지 않는 파일형식입니다", -1);
			                    FileUtil.deleteFile(saveDirectory + multi.getFilesystemName("attachment")); // 임시 첨부파일 제거
			                    return;
			                }
			            }
			 
			            
			            String user_name = (String)multi.getParameter("writer");
			            String cell1 = (String)multi.getParameter("mobile1");
			            String cell2 = (String)multi.getParameter("mobile2");
			            String cell3 = (String)multi.getParameter("mobile3");

						String tel1 = (String)multi.getParameter("tel1");
			            String tel2 = (String)multi.getParameter("tel2");
			            String tel3 = (String)multi.getParameter("tel3");

						String addr1 = (String)multi.getParameter("address1");
						String addr2 = (String)multi.getParameter("address2");
			                         
			            String email1 = (String)multi.getParameter("email");
			            String email2 = (String)multi.getParameter("email3");
			            String q_type = (String)multi.getParameter("q_type"); 
			            
			            String voc_title = (String)multi.getParameter("title");
						String voc_message = (String)multi.getParameter("content");
			 //http://www.hyundai-dvp.com/kr/include/mail_download.jsp?filename=a.txt
			 
									// 관리자에게 메일 발송
						String from = ConfigUtil.getString("mail.email.admin");
						String subject = "[" + q_type + "]";
						StringBuffer content = new StringBuffer();
						content.append("<p style='font-size:12px;color:#003399;'>* 본 문의메일은 현대산업개발 홈페이지에서 고객이 작성한 글 입니다. 담당하시는 분은 아래 메일주소로 답변주시면 됩니다.</p>").append("<br>")
							.append("<div style='border:1px solid #e5e5e5;padding:10px;width:700px;line-height:18px;'>")
							.append("<strong style='font-size:12px;color:#003399;'>고객이름 :</strong> <span style='font-size:12px;'> ").append(user_name).append("<br>")
							.append("<strong style='font-size:12px;color:#003399;'>자택번호 :</strong> <span style='font-size:12px;'> ").append(tel1).append("-").append(tel2).append("-").append(tel3).append("<br>")
							.append("<strong style='font-size:12px;color:#003399;'>휴대폰 :</strong> <span style='font-size:12px;'> ").append(cell1).append("-").append(cell2).append("-").append(cell3).append("<br>")
							.append("<strong style='font-size:12px;color:#003399;'>이메일 :</strong> <span style='font-size:12px;'> ").append(email1).append("@").append(email2).append("<br>")
							.append("<strong style='font-size:12px;color:#003399;'>주소 :</strong> <span style='font-size:12px;'> ").append(addr1).append("<br>")
							.append("<strong style='font-size:12px;color:#003399;'>문의구분 :</strong> <span style='font-size:12px;'> ").append(q_type).append("<br>")
							.append("--------------------------------------------------------------------<br>")
							.append("<strong style='font-size:12px;color:#003399;'>제목 :</strong> <span style='font-size:12px;'>").append(voc_title).append("<br>")
							.append("<strong style='font-size:12px;color:#003399;'>내용 :</strong> <span style='font-size:12px;'> ").append(StringUtils.replace(voc_message, "\n", "<br>"));

						if( StringUtils.isNotBlank(fileOriginalName)){
							content.append("<BR><BR> <strong style='font-size:12px;color:#003399;'>첨부파일</strong><span style='font-size:12px;'>(파일다운로드가 안될경우 도구 > 인터넷옵션 > UTF-8로 URL보내기를 체크해주세요.) :</span> <BR> <span style='font-size:12px;'> <a href='").append("http://www.hyundai-dvp.com/kr/include/mail_download.jsp?filename="+ fileOriginalName +"'>"+fileOriginalName+"</a></div>");
						}
			 
				   out.println(content);
			
						String adminName = "관리자";
						String to = "yoonna@hyundai-dvp.com";  // 기본 IR관련문의

						if(q_type.equals("협력회사문의")){
							to = "yoonna@hyundai-dvp.com;5509@hyundai-dvp.com;1100970@hyundai-dvp.com";
							/* to = "yoonna@hyundai-dvp.com;5704@hyundai-dvp.com;1100970@hyundai-dvp.com;4001015@hyundai-dvp.com"; */ 
						}
						if(q_type.equals("일반문의")){
							to = "yoonna@hyundai-dvp.com;webinfo@hyundai-dvp.com"; 
							//to = "yoonna@hyundai-dvp.com;webinfo@hyundai-dvp.com"; 
						}
						
						try { 
							 	String[] toArr = to.split(";");
							 	int i = 0;
								while(i<toArr.length){
									MailUtil.sendMail(from, toArr[i] , "현대산업개발", adminName, subject, content.toString() );
									i++;
								}
								

							//기존소스
							//MailUtil.sendMail(from, to, "현대산업개발", adminName, subject, content.toString() );
							out.println("메일전송");
						} catch(Exception mx) {out.println(mx.toString()) ;}
					    JavascriptUtil.location(response, "/front/08customercenter/csCenter.jsp", "정상적으로 등록되었습니다");
						
			        } catch(Exception ex) {
			            JavascriptUtil.back(response, "처리중 오류가 발생하였습니다"+ex.toString(), -1); return;
			        }

//				고객문의 글등록시 메일발송 E >
%>
<!DOCTYPE html>
<html>
<body>
<script>
	alert ('등록되었습니다');
	location.href = "/front/08customercenter/csCenter.jsp";
</script>
</body></html>