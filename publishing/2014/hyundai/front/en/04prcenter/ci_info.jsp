<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article alert" id="content">
		<div class="gray">
			<p>PC에 최적화된 페이지 입니다.</p>
		</div>
		<div class="wrap">
			<p class="blind">CYBER PR CENTER</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_04prcenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg3">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">PR CENTER</a></li>
						<li class="gt last"><a href="#none">CI / BI CENTER</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>CI / BI CENTER</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/en/04prcenter/ci_info.jsp"><span>CI</span></a></li>
							<li><a href="/front/en/04prcenter/bi_info.jsp"><span>BI</span></a></li>
						</ul>
					</div>

					<div class="ci">
						<h2>Logo Construction Rationale</h2>
						<p>Like HDC's buildings, the logo has been constructed on a grid system, using geometric shapes to ensure symmetry. Balance and soft but dynamic curved corners. The simple application of a serif front helps depict HDC as a brand that is connected to its history but also focused on the future.</p>
						<div class="bt">
                            <ul>
                                <li><a href="/front/en/data_file/CI_jpg.zip">JPG download</a></li>
                                <li><a href="/front/en/data_file/CI_ai.zip">AI download</a></li>
                            </ul>
                        </div>
						<img src="/front/en/images/04prcenter/ci01.gif" alt="Logo Construction Rationale"/>
						<h3>Logo type</h3>
						<p class="txt_style">The HDC logotype has been supplied as an EPS file, both in Korea and English. The logotype should never be typed out, and its colour should never change; the unaltered EPS file should be used exclusively</p>
						<img src="/front/en/images/04prcenter/ci02.gif" alt="Logo type"/>
					</div>

				</div>

				

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/en/images/sub/bt_top.png" alt="Top of page"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>
</body>
</html>
