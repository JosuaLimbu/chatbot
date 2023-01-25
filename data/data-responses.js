// data templates or responses
const templates = '{\
	"name":"Kamu nanya. Kamu bertanya-tanya. Call me, DormBot.", \
	"hobby":"Haha.. saya suka membaca pikiran kamu :).", \
	"human":"Saya adalah chatbot, dapat memberikan informasi.",\
	"okey":"Okey, kamu luar biasa. Salam sukses !!!",\
	"greetings":"hallo, semoga kamu baik-baik saja.",\
	"thanks":"Iya, sama-sama ya.",\
	"hi":"Hi juga. Semoga harimu menyenangkan.",\
	"condition":"Saya adalah chatbot. Pastinya saya sehat.",\
	"asrama":"Asrama yang ada di UNKLAB terbagi menjadi dua : Asrama Wanita ada Jasmine, Edelweiss, Annex, dan Panggung. Sedangkan yang Pria ada : Guest House, Crystal, dan Genset",\
	"biaya":"Untuk biaya asrama, kamu bisa mengeceknya di situs www.unklab.ac.id",\
	"info":"Universitas Klabat disingkat Unklab adalah perguruan tinggi swasta yang didirikan, dibina, dan diawasi oleh Gereja Masehi Advent Hari Ketujuh Uni Kawasan Timur Indonesia melalui Yayasan Universitas Klabat. Ketika didirikan pada tangal 7 Oktober 1965, Unklab berstatus perguruan tinggi dengan nama Perguruan Tinggi Klabat yang mempunyai jurusan Theologia dan Pendidikan dengan program studi dua tahun. Program 4 tahun (BA) dengan jurusan Ekonomi dan Administrasi Perkantoran 2 tahun dibuka pada tahun 1970. Tahun berikutnya statusnya diubah dari perguruan tinggi menjadi sekolah tinggi. Fakultas Pertanian dengan jurusan Budidaya Pertanian pendidikan Sarjana Muda menambah perluasan Unklab pada tahun 1981.",\
	"daftar":"Untuk pendaftaran mahasiswa baru, kamu bisa mengunjungi situs www.unklab.ac.id",\
	"wisata":"Rekomendasi wisata di Indonesia ada di Pantai Kuta, Bali",\
	"saya":"Saya tahu siapa kamu, kamu adalah Josua Limbu"\
}';


// parse to json object
const data_responses = JSON.parse(templates);