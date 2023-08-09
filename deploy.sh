cd ./backend

pm2 stop run
pm2 del run

git pull origin main

npm install

npm run build