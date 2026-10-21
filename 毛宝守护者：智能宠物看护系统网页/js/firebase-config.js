// js/firebase-config.js

// 1. 引入 Firebase 的各个功能模块 (基于你截图中的 v12.8.0 版本)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// 2. 你的项目配置 (就是你截图里中间的那一大段 const firebaseConfig = { ... }; )
// --- 请把你截图里的那段配置代码完整替换下面这一块 ---
const firebaseConfig = {
  apiKey: "AIzaSyBWa5ag_nL60dEkNXp0r6S3_QU6H4wPyRc", // 这里我已经照着你的图填了，你可以直接用
  authDomain: "petcam-db.firebaseapp.com",
  projectId: "petcam-db",
  storageBucket: "petcam-db.firebasestorage.app",
  messagingSenderId: "996439701767",
  appId: "1:996439701767:web:663ba7651729f9c815eda2"
};
// -----------------------------------------------------

// 3. 初始化 Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);       // 初始化认证功能
const db = getFirestore(app);    // 初始化数据库功能

// 4. 导出这些工具，让其他页面(login/register)可以使用
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, collection, addDoc, getDocs, query, where };