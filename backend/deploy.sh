cd ./dist/database
npm install
npx prisma generate
pm2 start ../run.js