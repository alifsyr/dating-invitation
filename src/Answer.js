import { useState } from "react";
import emailjs from "emailjs-com";

const Answer = () => {
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [email, setEmail] = useState("");
  const [kasuh_answer, setKasuhAnswer] = useState("");
  const [message, setMessage] = useState("");
  let initialYes = "Yes Banget😁";
  let clickedYes = "I'm happy";
  const [yes, setYes] = useState(initialYes);
  let initialNo = "No😟";
  let clickedNo = "so sad";
  const [no, setNo] = useState(initialNo);
  let initialReschedule = "Reschedule🤔";
  let clickedReschedule = "When?    ";
  const [reschedule, setReschedule] = useState(initialReschedule);
  const [yesColor, setYesColor] = useState("");
  const [noColor, setNoColor] = useState("");
  const [rescheduleColor, setRescheduleColor] = useState("");

  const handleYes = (e) => {
    e.preventDefault();
    setKasuhAnswer("Yes Banget");
    setYesColor("green");
    setNoColor("");
    setRescheduleColor("");
    console.log(kasuh_answer);
  };
  const handleNo = (e) => {
    e.preventDefault();
    setKasuhAnswer("No");
    setYesColor("");
    setNoColor("red");
    setRescheduleColor("");
    console.log(kasuh_answer);
  };
  const handleReschedule = (e) => {
    e.preventDefault();
    setKasuhAnswer("Reschedule");
    setYesColor("");
    setNoColor("");
    setRescheduleColor("yellow");
    console.log(kasuh_answer);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (email && kasuh_answer && message) {
      emailjs.sendForm("service_lkfuhli", "template_0uwnrlb", e.target, "user_re15qqoOdS5PWBbmroPee").then(
        (result) => {
          alert("Email kamu sudah terkirim, makasih ya cantik udah mau nyempetin waktu buat jawab pertanyaan aku 😁");
          setEmail("");
          setKasuhAnswer("");
          setMessage("");
          setYesColor("");
          setNoColor("");
        },
        (error) => {
          alert("WARNING: Maaf email kamu belum terkirim, tolong kirim ulang ya emailnya makasihh");
        }
      );
    } else {
      alert("Diisi semua atuh ih 😁");
    }
  };

  return (
    <div className="answer">
      <div className="ask animate-right">
        <h1>So, kamu mau gak jalan sama aku???</h1>
      </div>
      <div className="answer-container animate-left">
        <button onClick={() => setVisibleInfo(!visibleInfo)} className="answer-btn all-btn">
          READ ME
        </button>
        {visibleInfo && (
          <div className="info animate-zoom">
            <p>Jadi jawaban dari kamu bakal dikirim ke email aku, kamu bisa pilih jawabannya tinggal di-klik aja.</p>
            <p> </p>
            <p>Ada 4 jawaban yang bisa Aisha pilih:</p>
            <p> 1. Yey Banget😁: Aisha mau jalan Alif</p>
            <p> 2. Reschedule🤔: Aisha mau jalan sama Alif tapi tanggalnya di ganti</p>
            <p> 3. No😟: Aisha gak mau jalan sama Alif</p>
            <p> </p>
            <p>Buat message-nya isi aja terserah Aisha, tapi kalau bisa tulisin alesan kenapa Aisha pilih jawabannya</p>
          </div>
        )}
        <form className="fill-answer" onSubmit={sendEmail}>
          <label htmlFor="name" hidden>
            <input type="text" id="name" name="name" defaultValue="Aisha" />
          </label>
          <label htmlFor="email">
            <h3>Email</h3>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label htmlFor="kasuh_answer">
            <h3>Answer</h3>
            <div className="option-answer">
              <button onClick={handleYes} className={"option-btn btn-yes " + yesColor} onMouseOver={() => setYes(clickedYes)} onMouseLeave={() => setYes(initialYes)}>
                {yes}
              </button>
              <button onClick={handleReschedule} className={"option-btn btn-reschedule " + rescheduleColor} onMouseOver={() => setReschedule(clickedReschedule)} onMouseLeave={() => setReschedule(initialReschedule)}>
                {reschedule}
              </button>
              <button onClick={handleNo} className={"option-btn btn-no " + noColor} onMouseOver={() => setNo(clickedNo)} onMouseLeave={() => setNo(initialNo)}>
                {no}
              </button>
              <input type="text" id="kasuh_answer" name="kasuh_answer" value={kasuh_answer} hidden />
            </div>
          </label>
          <label htmlFor="message">
            <h3>Messages</h3>
            <textarea type="text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <input type="submit" className="answer-btn btn-mail all-btn" value={"Send Email 📧"} />
        </form>
      </div>
    </div>
  );
};

export default Answer;
