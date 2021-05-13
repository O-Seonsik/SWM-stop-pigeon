<br><p align="center"><img src="/readmeImg/stop_with_logo.gif"></p>

<h2 align="center">저 새는 해로운 새다</h2>
<h3 align="center">유해야생동물 집비둘기로부터 살아남기 위한 전쟁</h3>
<p align="center">
	<a href="https://github.com/O-Seonsik/SWM-stop-pigeon/search?l=TSX&type=code"><img alt="GitHub language count" src="https://img.shields.io/github/languages/count/O-Seonsik/SWM-stop-pigeon"></a>
	<a href="https://github.com/O-Seonsik/SWM-stop-pigeon/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/O-Seonsik/SWM-stop-pigeon?color=success"></a>
	<a href="https://github.com/O-Seonsik/SWM-stop-pigeon/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/O-Seonsik/SWM-stop-pigeon"></a>
	<a href="https://github.com/O-Seonsik/SWM-stop-pigeon/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/O-Seonsik/SWM-stop-pigeon"></a>
</p>
<p align="center"><img src="/readmeImg/hatebird_pigeon.jpg" width="50%"></p>
<br><br>

## 팀 소개
<p align="center"><img src="/readmeImg/FunCoolSexy.png"></p>
<table>
  <tr>
    <td align="center" width="80px">직책</td><td align="center" width="100px">이름</td><td align="center" width="300px">담당</td><td align="center" width="120px">Github</td><td align="center">Contact</td>
  </tr>
  <tr>
    <td align="center">팀장</td><td align="center">한일석</td><td align="center">데이터분석, 모델 생성</td><td><a href="https://github.com/x2ever"><img src="http://img.shields.io/badge/x2ever-655ced?style=social&logo=github"/></td><td><a href="mailto:x2ever.han@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=x2ever.han@gmail.com&color=green&style=flat-square&logo=gmail"></td>
  </tr>
  <tr>
    <td align="center">팀원</td><td align="center">김정훈</td><td align="center">kakaomaps, 문서화</td><td><a href="https://github.com/LiiNen"><img src="http://img.shields.io/badge/LiiNen-655ced?style=social&logo=github"/></td><td><a href="mailto:kjeonghoon065@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=kjeonghoon065@gmail.com&color=green&style=flat-square&logo=gmail"></td>
  </tr>
  <tr>
    <td align="center">팀원</td><td align="center">김한슬</td><td align="center">front-end, React</td><td><a href="https://github.com/bluewood-truth"><img src="http://img.shields.io/badge/bluewood-655ced?style=social&logo=github"/></td><td><a href="mailto:bluewood.truth@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=bluewood.truth@gmail.com&color=green&style=flat-square&logo=gmail"></td>
  </tr>
  <tr>
    <td align="center">팀원</td><td align="center">박상욱</td><td align="center">UI/UX, React</td><td><a href="https://github.com/whoisStarBox"><img src="http://img.shields.io/badge/whoisStarBox-655ced?style=social&logo=github"/></td><td><a href="mailto:y2142144@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=y2142144@gmail.com&color=green&style=flat-square&logo=gmail"></td>
  </tr>
  <tr>
    <td align="center">팀원</td><td align="center">신지민</td><td align="center">front-end, CSS</td><td><a href="https://github.com/zimiin"><img src="http://img.shields.io/badge/Jimin Shin-655ced?style=social&logo=github"/></td><td><a href="mailto:kahin6105@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=kahin6105@gmail.com&color=green&style=flat-square&logo=gmail"></td>
  </tr>
  <tr>
    <td align="center">팀원</td><td align="center">오선식</td><td align="center">kakaomaps, React</td><td><a href="https://github.com/O-Seonsik"><img src="http://img.shields.io/badge/O's-655ced?style=social&logo=github"/></td><td><a href="mailto:dhtjstlr777@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=dhtjstlr777@gmail.com&color=green&style=flat-square&logo=gmail"></td>
  </tr>
  <tr>
    <td align="center">멘토</td><td align="center">방요셉</td><td align="center">지도/감독</td><td><a href="https://github.com/ezon241"><img src="http://img.shields.io/badge/bang yo sep-655ced?style=social&logo=github"/></td><td><a href="mailto:ezon241@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=ezon241@gmail.com&color=green&style=flat-square&logo=gmail"></td>
  </tr>
</table>

<br><br>

## 프로젝트 소개
'비둘기 멈춰!'는 도심 속의 비둘기를 막기 위해 개발되었습니다. 집비둘기는 2009년 5월 31일 유해 야생동물로 지정되었습니다.<br>
또한 그 개체수와 관련 민원 수는 꾸준히 증가하는 추세입니다.<br>
<p align="center"><img src="/readmeImg/pigeon_statistic.png"></p>
저희는 이러한 사회 문제를 해결하기 위해 비둘기 퇴치와 민원 접수를 간편하게 진행할 수 있도록 하고,<br>
알고리즘 기반으로 비둘기 출몰 가능성이 높은 지역을 알려주어 도심을 다니는 데에 도움을 줍니다.


저희는 먼저 비둘기의 영향력 모델을 다음과 같이 표현했습니다.

	비둘기 영향력 = 1 / (거리영향력 x 거리 + 1 / 지역 영향력) ^ 로그 영향력
	
이제 거리 영향력, 지역 영향력, 로그 영향력 등의 하이퍼 파라미터를 구하면 됩니다.
이들의 근사값을 얻기 위해 위해 비둘기 영향력을 지역구별로 적분하였고, 이 적분값이 각 지역구 별 민원접수 비율이 되도록 했습니다.
이 때 머신러닝 기법 중 하나인 SVM을 적용하였습니다.


