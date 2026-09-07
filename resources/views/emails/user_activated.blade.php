<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aktivasi Keanggotaan IKATWI</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f4f6f8;
            font-family: 'Segoe UI', Arial, sans-serif;
            color: #334155;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table {
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        td {
            padding: 0;
        }
        img {
            border: 0;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #f4f6f8;
            padding-top: 30px;
            padding-bottom: 40px;
        }
        .main-container {
            background-color: #ffffff;
            margin: 0 auto;
            max-width: 600px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
        }
        .header {
            background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%);
            padding: 36px 30px;
            text-align: center;
        }
        .logo {
            width: 64px;
            height: 64px;
            background: #ffffff;
            border-radius: 50%;
            padding: 6px;
            display: inline-block;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .header h1 {
            color: #ffffff;
            font-size: 22px;
            margin: 16px 0 4px 0;
            font-weight: 700;
            letter-spacing: 0.5px;
        }
        .header p {
            color: rgba(255, 255, 255, 0.85);
            font-size: 13px;
            margin: 0;
        }
        .body-content {
            padding: 32px 30px;
        }
        .greeting {
            font-size: 16px;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 12px;
        }
        .lead-text {
            font-size: 14px;
            line-height: 1.6;
            color: #475569;
            margin-bottom: 24px;
        }
        .info-card {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 24px;
        }
        .info-row {
            display: table;
            width: 100%;
            padding: 6px 0;
            border-bottom: 1px dashed #e2e8f0;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .info-label {
            display: table-cell;
            width: 40%;
            font-size: 13px;
            color: #64748b;
            font-weight: 500;
        }
        .info-value {
            display: table-cell;
            width: 60%;
            font-size: 13px;
            color: #0f172a;
            font-weight: 700;
            text-align: right;
        }
        .cta-container {
            text-align: center;
            margin: 30px 0 20px 0;
        }
        .cta-button {
            background: linear-gradient(135deg, #064e3b 0%, #059669 100%);
            color: #ffffff !important;
            text-decoration: none;
            padding: 14px 32px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 15px;
            display: inline-block;
            box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
        }
        .note-box {
            background-color: #f0fdf4;
            border-left: 4px solid #059669;
            padding: 14px 16px;
            border-radius: 8px;
            margin-top: 20px;
            font-size: 12.5px;
            color: #166534;
            line-height: 1.5;
        }
        .footer {
            background-color: #f8fafc;
            border-top: 1px solid #e2e8f0;
            padding: 24px 30px;
            text-align: center;
            font-size: 12px;
            color: #94a3b8;
        }
        .footer a {
            color: #059669;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <center class="wrapper">
        <div class="main-container">
            
            <!-- Header -->
            <div class="header">
                <div class="logo">
                    <img src="https://ikatwi.org/assets/images/logo.png" width="52" height="52" alt="IKATWI" style="display:block;margin:auto;">
                </div>
                <h1>IKATWI</h1>
                <p>Ikatan Terapis Wicara Indonesia</p>
            </div>

            <!-- Content -->
            <div class="body-content">
                <div class="greeting">
                    Yth. Rekan Sejawat, {{ $user->name }}
                </div>
                <div class="lead-text">
                    Selamat! Pendaftaran keanggotaan Anda pada <strong>Ikatan Terapis Wicara Indonesia (IKATWI)</strong> telah berhasil diverifikasi oleh Dewan Pengurus dan status akun Anda saat ini dinyatakan <strong>AKTIF</strong>.
                </div>

                <!-- Credential Info Box -->
                <div class="info-card">
                    <div style="font-size: 14px; font-weight: 700; color: #064e3b; margin-bottom: 12px;">
                        📌 Informasi Resmi Anggota
                    </div>

                    <div class="info-row">
                        <span class="info-label">Nama Lengkap</span>
                        <span class="info-value">{{ $user->name }}</span>
                    </div>

                    <div class="info-row">
                        <span class="info-label">Nomor Anggota (KTA)</span>
                        <span class="info-value" style="color: #059669; font-size: 14px;">{{ $user->no_anggota ?? '-' }}</span>
                    </div>

                    <div class="info-row">
                        <span class="info-label">NIK</span>
                        <span class="info-value">{{ $user->nik ?? '-' }}</span>
                    </div>

                    <div class="info-row">
                        <span class="info-label">Email Terdaftar</span>
                        <span class="info-value">{{ $user->email }}</span>
                    </div>

                    <div class="info-row">
                        <span class="info-label">Wilayah DPW</span>
                        <span class="info-value">{{ $user->province->name ?? '-' }}</span>
                    </div>

                    <div class="info-row">
                        <span class="info-label">Cabang DPC</span>
                        <span class="info-value">{{ $user->city->name ?? '-' }}</span>
                    </div>
                </div>

                <!-- Next Steps Notice -->
                <div class="note-box">
                    <strong>💡 Petunjuk Akses Akun:</strong><br>
                    • Anda dapat masuk ke Portal IKATWI menggunakan <strong>Nomor Anggota</strong> atau <strong>Email</strong> Anda beserta password yang telah dibuat.<br>
                    • Untuk mengaktifkan <strong>E-KTA Resmi</strong> dan barcode verifikasi, silakan selesaikan pembayaran Iuran Tahunan melalui menu <strong>Tagihan</strong> pada portal.
                </div>

                <!-- Action Button -->
                <div class="cta-container">
                    <a href="{{ url('/login') }}" class="cta-button">
                        Masuk ke Portal Anggota →
                    </a>
                </div>
            </div>

            <!-- Footer -->
            <div class="footer">
                <p style="margin: 0 0 6px 0;">Email ini dikirim secara otomatis oleh Sistem Portal Resmi <strong>IKATWI</strong>.</p>
                <p style="margin: 0;">© {{ date('Y') }} Ikatan Terapis Wicara Indonesia (IKATWI). All rights reserved.</p>
                <p style="margin: 6px 0 0 0;"><a href="https://ikatwi.org">https://ikatwi.org</a></p>
            </div>

        </div>
    </center>
</body>
</html>
