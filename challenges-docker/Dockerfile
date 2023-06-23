FROM golang:1.18-bullseye AS build

WORKDIR /app

COPY main.go go.mod ./

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /go-hello

FROM scratch

WORKDIR ./

COPY --from=build ./go-hello ./go-hello

ENTRYPOINT ["/go-hello"]