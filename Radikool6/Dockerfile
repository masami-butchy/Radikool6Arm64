FROM microsoft/dotnet:2.2-sdk
MAINTAINER you<info@ez-design.net>

RUN mkdir /Radikool6/ && \
    mkdir /Radikool6/data && \
    apt-get update && \
    apt-get install ffmpeg -y && \
    git clone https://github.com/masami-butchy/Radikool6Arm64.git src && \
    cd src && \
    dotnet restore && \
    dotnet publish -c release -o /Radikool6/ -r linux-arm
EXPOSE 5000
WORKDIR /Radikool6/
CMD ["dotnet", "Radikool6.dll"]
