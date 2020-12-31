FROM node:14.15.3 
WORKDIR /usr/src/app/frontend
COPY ["frontend/package.json", "frontend/package-lock.json", "frontend/yarn.lock", "frontend/tsconfig.json", "/usr/src/app/frontend/"]
RUN npm install
