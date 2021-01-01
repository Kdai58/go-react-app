FROM golang:alpine
WORKDIR /usr/src/app/backend
COPY ["backend/go.mod", "backend/go.sum", "/usr/src/app/backend/"]
RUN go mod download