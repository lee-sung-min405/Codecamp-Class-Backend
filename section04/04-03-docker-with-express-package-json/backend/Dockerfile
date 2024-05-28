#1. 운영체제 및 프로그램 설치
#FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

#1. 운영체제 및 프로그램 설치 (이미 리눅스, node, npm, yarn 까지 모드 깔려 있는 컴퓨터 다운로드하는 방식)
FROM node:14

#2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
#RUN mkdir myfolder 아래에서 COPY할 때, 자동으로 만들어주기 때문에 굳이 필요 없음
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
#커서 위치
WORKDIR /myfolder/ 
RUN yarn install

COPY . /myfolder/

#3. 도커안에서 index.js 실행시키기
#RUN은 도커를 실행할때 RUN문도 포함을 해서 이미지로 저장한다.
#CMD는 도커를 실행하면 CMD문은 제외하고 이미지로 저장한다. 이후 이미지를 불러와 실행을 하게 되면 CMD가 실행이 된다.
#RUN node index.js
CMD yarn start:dev