import { DatabaseState } from './types';

export const INITIAL_DATA: DatabaseState = {
  anggota: [
    {
      Nama: 'Dedi Kurniawan',
      Jabatan: 'Koordinator Kebersihan',
      Area: 'Lantai 1 & Masjid',
      WA: '081234567890',
      Foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    },
    {
      Nama: 'Ahmad Supriyadi',
      Jabatan: 'Petugas Kebersihan',
      Area: 'Gedung SMP',
      WA: '081298765432',
      Foto: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    },
    {
      Nama: 'Bambang Irawan',
      Jabatan: 'Petugas Kebersihan',
      Area: 'Gedung SMA & Lab',
      WA: '081311223344',
      Foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      Nama: 'Siti Aminah',
      Jabatan: 'Petugas Kebersihan',
      Area: 'Ruang Guru & Kantor',
      WA: '085712345678',
      Foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    {
      Nama: 'Rian Hidayat',
      Jabatan: 'Teknisi Sarana & Prasarana',
      Area: 'Seluruh Area Sekolah',
      WA: '087812345678',
      Foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    {
      Nama: 'Farhan Maulana',
      Jabatan: 'Petugas Kebersihan',
      Area: 'Lapangan & Parkir',
      WA: '081287654321',
      Foto: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    },
  ],
  lembur: [
    {
      Petugas: 'Dedi Kurniawan & Ahmad',
      Kegiatan: 'Persiapan Ujian Semester & Pembersihan Menyeluruh Aula',
      In: '07:00',
      Out: '15:00',
      Keterangan: 'Aula Utama & Lantai 2',
      'Hari/Tanggal': 'Sabtu, 27 September 2026',
    },
    {
      Petugas: 'Bambang Irawan',
      Kegiatan: 'Penyemprotan Disinfektan & Pembersihan Kaca Balkon',
      In: '13:00',
      Out: '17:00',
      Keterangan: 'Gedung Barat & SMA',
      'Hari/Tanggal': 'Minggu, 28 September 2026',
    },
    {
      Petugas: 'Rian Hidayat',
      Kegiatan: 'Pengecekan Kelistrikan & Pembersihan AC Perpustakaan',
      In: '08:00',
      Out: '12:00',
      Keterangan: 'Perpustakaan Lt. 3',
      'Hari/Tanggal': 'Senin, 29 September 2026',
    },
  ],
  informasi: [
    {
      Judul: 'Persiapan Penilaian Akreditasi Sekolah',
      Informasi:
        'Mohon seluruh petugas Tim SABER memeriksa dan memastikan area masing-masing bersih dan rapi menjelang visitasi akreditasi minggu depan.',
      Tanggal: '26 Sept 2026',
    },
    {
      Judul: 'Distribusi Cairan Pembersih & Plastik Sampah',
      Informasi:
        'Pengambilan stok cairan pembersih lantai, sabun cuci tangan, dan kantong sampah baru dapat diambil di ruang logistik pada hari Jumat pukul 14:00.',
      Tanggal: '24 Sept 2026',
    },
    {
      Judul: 'Standar Baru Pemilahan Sampah Sekolah',
      Informasi:
        'Pastikan tempat sampah organik (hijau) dan anorganik (kuning) dipisahkan saat pembuangan ke TPS utama.',
      Tanggal: '20 Sept 2026',
    },
  ],
  pengaduan: [
    {
      id: 'pg-1',
      Nama: 'Ust. Zulkifli (Guru SMP)',
      Area: 'Toilet Guru Lantai 2',
      Kendala: 'Kran wastafel sedikit longgar dan menetes terus, perlu dikencangkan seal karetnya.',
      Foto: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
      Tanggal: '25 Sept 2026',
      Status: 'Diproses',
    },
    {
      id: 'pg-2',
      Nama: 'Ibu Rahmawati (TU)',
      Area: 'Ruang TU Lantai 1',
      Kendala: 'Tempat sampah ruang tata usaha penutupnya patah.',
      Foto: '',
      Tanggal: '23 Sept 2026',
      Status: 'Selesai',
    },
  ],
  pengajuan: [
    {
      id: 'pj-1',
      Nama: 'Dedi Kurniawan',
      Area: 'Lantai 1 & Masjid',
      Prioritas: 'Penting',
      Kebutuhan: [
        'Kain pel microfiber 5 pcs',
        'Cairan pembersih lantai karbol 10 liter',
        'Karet pendorong air / squeegee lantai 2 buah',
        'Sarung tangan karet 6 pasang',
      ],
      Tanggal: '24 Sept 2026',
      Status: 'Disetujui',
    },
  ],
  laporan: [
    {
      id: 'lp-1',
      Nama: 'Dedi Kurniawan',
      Area: 'Masjid Nurul Imam',
      Pekerjaan: 'Vacuum karpet sholat, cuci tempat wudhu, dan pembersihan kaca jendela masjid.',
      Catatan: 'Kondisi masjid bersih dan wangi siap untuk sholat Dzuhur berjamaah.',
      Foto: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=400&q=80',
      Tanggal: '25 Sept 2026 - 10:30 WIB',
    },
  ],
};
