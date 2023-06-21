## Readme => notes app

1. buat file package.json
   `npm init --y`
   
2. install nodemon
   `npm install nodemon --save-dev`
   
3. install eslint
   `npm install eslint --save-dev`
   
4. konfigurasi eslint
   `npx eslint --init`
   + Setting seperti berikut:
     - How would you like to use ESLint? -> To check, find problems, and enforce code style.
     - What type of modules does your project use? -> CommonJS (require/exports).
     - Which framework did you use? -> None of these.
     - Does your project use TypeScript? -> N.
     - Where does your code run? -> Node (pilih menggunakan spasi).
     - How would you like to define a style for your project? -> Use a popular style guide.
     - Which style guide do you want to follow? -> (Anda bebas memilih, sebagai contoh pilih AirBnB).
     - What format do you want your config file to be in? -> JSON.
     - Would you like to …… (seluruh pertanyaan selanjutnya) -> Y.
    
5. install hapi untuk membuat http server.
   `npm install @hapi/hapi`

6. install nanoid.
   `npm install nanoid@3.x.x`

7. untuk mengatasi tetap error karena keamanan chrome, gunakan ini untuk melakukan disable sementara.
   `chrome://flags/#block-insecure-private-network-requests`
   
