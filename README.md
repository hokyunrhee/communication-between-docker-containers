# How To Communicate Between Docker Containers

컨테이너가 외부에 생성된 network를 사용하도록 만들면 서로 다른 두 컨테이너간 통신이 가능하도록 만들 수 있습니다.

```docker
services:
  # ...
networks:
  default:
    external:
      name: my-pre-existing-network
```

## Run

```sh
$ docker network create custom-network
$ docker network ls

$ docker-compose -f server/docker-compose.yml up -d --build
$ docker-compose -f client/docker-compose.yml up -d --build
```

## Network information

```sh
$ docker network inspect custom-network
[
    {
        "Name": "custom-network",
        "Id": "1b26b95c46f58221b5dab50a2e8e1fa4803078ccb36be3bba32ce08f01ef2ee4",
        "Created": "2022-05-13T14:52:12.996476713Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.24.0.0/16",
                    "Gateway": "172.24.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "8c5ec241e4872960656b0fbff3affede54281c26d35f568d330e66f97bc9a02f": {
                "Name": "websocket-client",
                "EndpointID": "0757edace59fc4039d2457be0f44a30764bfcb7afab0dd210f87c44e3839cd39",
                "MacAddress": "02:42:ac:18:00:03",
                "IPv4Address": "172.24.0.3/16",
                "IPv6Address": ""
            },
            "c1db790c6800332b211e9f7a8dab576733c01efc67e1b42860cd3c55bf6a336a": {
                "Name": "websocket-server",
                "EndpointID": "eaad84dba5c489858168ebdf085285d3dfcfe419de2c785a0e1d0a86bcc5e490",
                "MacAddress": "02:42:ac:18:00:02",
                "IPv4Address": "172.24.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]
```
