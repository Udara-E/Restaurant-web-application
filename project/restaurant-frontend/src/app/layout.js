

// app/layout.js
import "./globals.css";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Chatbot from "../components/common/Chatbot";   // ⬅️ new
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Arcadia Cafe and Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <AuthProvider>
          
          

          {children}

        
          <Footer />

          <Chatbot />
        </AuthProvider>
      </body>
    </html>
  );
}
