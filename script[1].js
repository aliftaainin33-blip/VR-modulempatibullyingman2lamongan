function startExperience(){go("pengenalan")}\nlet scenario="Verbal Bullying", playing=false, sec=0, angle=0, timer;
function go(id){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));document.getElementById(id).classList.add("active");window.scrollTo(0,0);document.querySelector("nav").classList.remove("open")}
function choose(name,desc){scenario=name;document.getElementById("scenarioName").textContent=name+" — "+desc;go("vr")}
function togglePlay(){playing=!playing;let b=document.getElementById("playBtn");if(playing){b.textContent="⏸ Jeda Simulasi";sec=0;timer=setInterval(()=>{sec++;document.getElementById("timer").textContent="Simulasi berjalan · "+sec+" detik";document.getElementById("progress").style.width=Math.min(sec/60*100,100)+"%"},1000)}else{b.textContent="▶ Lanjut Simulasi";clearInterval(timer)}}
function look(dir){angle+=dir*12;document.querySelector(".hall").style.transform="perspective(700px) rotateY("+angle+"deg) scale(1.08)";document.getElementById("viewText").textContent=angle>0?"Melihat ke kanan":angle<0?"Melihat ke kiri":"Sudut pandang korban"}
function fullscreen(){let el=document.getElementById("scene");if(el.requestFullscreen)el.requestFullscreen()}
function showGuide(){document.getElementById("guide").classList.add("show")}
function hideGuide(){document.getElementById("guide").classList.remove("show")}
function emotion(btn){document.querySelectorAll(".emotions button").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected")}
function saveReflection(){let t=document.getElementById("reflection").value.trim();if(!t&&!document.querySelector(".emotions .selected")){alert("Pilih perasaan atau tulis refleksi terlebih dahulu.");return}alert("Refleksi tersimpan. Terima kasih sudah mengikuti simulasi.");go("evaluasi")}
function commit(){let n=document.querySelectorAll(".commit input:checked").length;document.getElementById("commitMsg").textContent=n?"🌟 Komitmen berhasil disimpan. Terima kasih sudah ikut menciptakan lingkungan aman!":"Pilih minimal satu komitmen terlebih dahulu."}
function loadVideo(e){let f=e.target.files[0];if(!f)return;let v=document.getElementById("uploadedVideo");v.src=URL.createObjectURL(f);v.style.display="block";v.play().catch(()=>{})}
