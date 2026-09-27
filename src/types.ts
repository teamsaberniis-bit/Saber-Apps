export interface Anggota {
  Nama: string;
  Jabatan: string;
  Area: string;
  WA: string;
  Foto?: string;
}

export interface LemburItem {
  Petugas: string;
  Kegiatan: string;
  In: string;
  Out: string;
  Keterangan: string;
  'Hari/tgl'?: string;
  'Hari/Tanggal'?: string;
}

export interface InformasiItem {
  Judul: string;
  Informasi: string;
  Tanggal: string;
}

export interface PengaduanItem {
  id?: string;
  Nama: string;
  Area: string;
  Kendala?: string;
  Pengaduan?: string;
  Foto?: string;
  Tanggal?: string;
  Status?: string;
}

export interface LaporanItem {
  id?: string;
  Nama: string;
  Area: string;
  Pekerjaan: string;
  Catatan: string;
  Foto?: string;
  Tanggal: string;
}

export interface PengajuanItem {
  id?: string;
  Nama: string;
  Area: string;
  Prioritas: 'Normal' | 'Penting' | 'Mendesak';
  Kebutuhan: string[];
  Tanggal: string;
  Status?: string;
}

export interface DatabaseState {
  anggota: Anggota[];
  lembur: LemburItem[];
  informasi: InformasiItem[];
  pengaduan: PengaduanItem[];
  pengajuan: PengajuanItem[];
  laporan: LaporanItem[];
}
