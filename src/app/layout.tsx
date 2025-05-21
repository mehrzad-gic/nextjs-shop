import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* CSS Assets */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.css"
          integrity="sha512-06CZo7raVnbbD3BlY8/hGUoUCuhk8sTdVGV3m3nuh9i2R+UmkLbLRTE/My8TuJ3ALbDulhBObJQWtOUt0mXzNQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link href="/assets/libs/slick-carousel/slick/slick.css" rel="stylesheet" />
        <link href="/assets/libs/slick-carousel/slick/slick-theme.css" rel="stylesheet" />

        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico" />

        {/* Libs CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link href="/assets/libs/feather-webfont/dist/feather-icons.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/6.3.0/simplebar.css"
          integrity="sha512-08T4cwCCcdn+1J5Kne6cRZwBFGo11KAc8b9dk6vDFkdscSz9L/rVUGl+kbIT8zQbBGqxkYwjz+HoZNp6B8bA7A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Theme CSS */}
        <link rel="stylesheet" href="/assets/css/theme.min.css" />
      </head>

      <body>
        <Navbar />

        {children}
        <Footer />

        {/* JavaScript Assets */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/6.3.0/simplebar.min.js"
          integrity="sha512-YumGHjm0sYk55Xdh6t6Uo/mHqBhDBNrW46HZKSBwkjq3X1Knnj7e3UUom2SE9zPpfjlTyJqSHnd4No1ca156cQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/theme.min.js" strategy="afterInteractive" />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
          integrity="sha512-HGOnQO9+SP1V92SrtZfjqxxtLmVzqZpjFFekvzZVWoiASSQgSr4cw9Kqd2+l8Llp4Gm0G8GIFJ4ddwZilcdb8A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/vendors/slick-slider.js" strategy="afterInteractive" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.js"
          integrity="sha512-Gh7nb/SRtjHNhTDWBfVjcZgmRmBhWqIXEiVOdSkzbJF0J3j2lTbxaIDmEsQqXs12XXN7nsyDbpUSv8qQ97qzeQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/vendors/tns-slider.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendors/zoom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}