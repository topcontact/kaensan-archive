# 🏛️ Artist Portfolio Studio (Sanity CMS)

ระบบจัดการเนื้อหาสำหรับศิลปิน (CMS) ให้ศิลปินสามารถ เพิ่ม แก้ไข หรือ ลบ ผลงาน, ภาพนิทรรศการ, ประวัติ Bio, และข้อมูลการติดต่อได้ด้วยตนเองผ่าน Web Interface ที่สวยงามและใช้งานง่าย

---

## 🚀 วิธีเริ่มต้นใช้งาน (Setup)

### 1. สมัครบัญชี Sanity (ฟรี)
1. เข้าไปที่ [sanity.io](https://www.sanity.io)
2. ล็อกอินด้วย Google หรือ GitHub
3. สร้าง Project ใหม่ (เลือก Free Plan)
4. จะได้รับ **Project ID** (เช่น `a1b2c3d4`)

### 2. กำหนด Project ID
สร้างไฟล์ `.env.local` ในโฟลเดอร์ `studio/`:
```env
SANITY_STUDIO_PROJECT_ID=รหัส_PROJECT_ID_ของคุณ
SANITY_STUDIO_DATASET=production
```
และในโฟลเดอร์หลักของเว็บ (`KaensanWB/.env.local`):
```env
VITE_SANITY_PROJECT_ID=รหัส_PROJECT_ID_ของคุณ
VITE_SANITY_DATASET=production
```

### 3. เปิด Studio เพื่อจัดการข้อมูล
```bash
cd studio
npm install
npm run dev
```
เปิดบราวเซอร์ที่ `http://localhost:3333` เพื่อเริ่มเพิ่มผลงานและอัปโหลดรูปภาพ!

### 4. Deploy Studio ให้ศิลปินเข้าใช้งานผ่านเน็ตได้ฟรี (Sanity Hosted)
```bash
cd studio
npx sanity deploy
```
ระบบจะให้ตั้งชื่อ URL เช่น `https://kaensan.sanity.studio` ศิลปินสามารถล็อกอินผ่านมือถือหรือคอมพิวเตอร์เพื่อแก้เว็บได้จากทุกที่ตลอดเวลา!
