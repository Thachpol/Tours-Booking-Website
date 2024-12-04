ทำเรื่องการจอง tours โดยใช้ 
frontend : React
backend : Node.js & Express.js
database : mongoDB
**ใช้ Postman ในการ CRUD สามารถเพิ่มข้อมูล แก้ไข อัพเดท ลบ เรียกดูข้อมูลได้**

วิธีรันโปรเจค :
cd เข้าแต่ละไฟล์เพื่อที่จะเรียกข้อมูลได้  cd MERN-Tour-Booking-Website / cd frontend / cd backend
npm start (frontend) localhost ที่ได้ คือ http://localhost:3000
npm run start-dev (backend) รันถูกจะขึ้น server listening on port 4000 / MongoDB database connected
จะสามารถเข้าถึงเว็บกับ database ได้แล้ว และโหลดไฟล์ของ Postman ที่แนบไปให้และเปิดในโปรแกรม Postman เพื่อที่จะได้เพิ่มข้อมูล แก้ไข อัพเดท ลบ เรียกดูข้อมูลได้
ข้อมูลที่เพิ่ม แก้ไข อัพเดท ลบ ในPostmanจะลิงค์กับMongoDB และแสดงขึ้นเว็บไซต์ได้ด้วย

เว็บไซต์จำเป็นต้อง login เพื่อให้สามารถ Booking Tours ได้ ถ้ายังไม่มีบัญชีจะต้องสร้างก่อนตรง Register