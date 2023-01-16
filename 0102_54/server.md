# md 파일

- Markdown의 약자로 HTML과 비슷한 언어
- 주로 GitHub에서 많이 사용한다.

# Server

- 외부에서 접근하는 컴퓨터
- serve : 제공하다
- server : 제공하는 자(사람, 물건, 컴퓨터)
- 컴퓨터일 때 제공하는 것은 파일, 정보(데이터), 서비스를 제공한다.

# Server와 Client

- 컴퓨터의 브라우저에서 웹페이지에 접속한다.
- 주소가 도메인일 경우 도메인 서버에서 IP주소를 찾는다.
- IP 주소로 접속하여 해당 Server 컴퓨터에게 요청한다.
- 해당 Server 컴퓨터는 요청의 라우터 등등의 정보를 기준으로 정보를 응답한다.
- 응답한 정보가 HTML 파일일 경우에 브라우저는 해당 페이지를 출력한다.

# AWS에 접속하기

- Putty(일종의 원격 프로그램)를 사용해서 IP주소와 키 파일을 입력한다. 주로 22 port를 사용한다.
- Putty는 IP주소에 해당하는 Server에 22 port로 접속을 시도한다.
- Server 컴퓨터는 22 port에 대한 방화벽이 열려있을 때 Putty에서 보내온 키 파일을 확인하여 접속을 허락한다. (꼭 Putty를 사용해야하는것은 아니다. CMD, PowerShell 등을 사용하여 접속하여도 무관하다.)

# AWS EC2 Apache에서의 접속

- Server 컴퓨터(EC2의 인스턴스)에 정보를 요청할 때 Apache에서 해당 요청을 받게된다. (Apache는 설정된 모든 port에 대해서 요청을 받는다.)
- VirtualHost에 설정된 port와 root폴더에 맞춰서 요청에 응답한다. (root 폴더에 연결하여 파일을 응답한다.)

# EX

- naver.com의 주소로 요청을 보냈을 때
- 도메인 주소에 해당하는 IP 주소의 컴퓨터(EC2)에 보낸다. (Server 컴퓨터는 해당 주소에 대해서 어디를 시작점으로 잡을 것인가? C:\? D:\? 윈도우에서는 어떤 하드디스크에 접속할 건지)
- Apache에서 root 폴더로 설정된 폴더의 파일을 응답한다. (Server의 시작점은 Apache에서 설정된 root 폴더이다. /var/www/html 폴더가 기본설정으로 root 폴더에 해당한다.)
- VirtualHost란 Apache에서 연결할 port를 설정한다.
