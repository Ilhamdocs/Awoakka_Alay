// let jumlahAngkot = 20;
// let angkotBeroperasi = 19;
// let namaAngkot = 1;
// while (namaAngkot <= angkotBeroperasi) {
//  console.log(`Angkot No- ${namaAngkot} Bekerja dengan baik`)
//  namaAngkot++
// }
// for ( namaAngkot = angkotBeroperasi + 1; namaAngkot <= jumlahAngkot; namaAngkot++) {
//  console.log(`Angkot No ${namaAngkot} tidak bekerja`)
// }


let jmlahAngkot = 20;
let angkotBerjalan = 10;
for (let noAngkot = 1; noAngkot <= jumlahAngkot ; noAngkot++){
 if (noAngkot <= angkotBerjalan) {
  document.writeln(`Angkot No ${noAngkot} beroperasi dengan gaya`)
 }else{
  console.log(`angkotn no ${noAngkot} tidak bergaya`)
}
}