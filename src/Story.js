import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Story = () => {
  const [sectionNumber, setSectionNumber] = useState(1);
  const maxSectionNumber = 2;
  const [sectionParagraph, setSectionParagraph] = useState("");

  const sectionData = [
    {
      id: 1,
      story:
        "Halo Aisha, how was your day? semoga kamu seneng terus yaa, sori nih mungkin ini bakal rada cringe gituu tapi aku pengen beda aja cara ngelakuinnya dari orang-orang yang ada di sekitar kamu. Bingung juga sih mau ngelakuinnya kayak gimana soalnya pengen yang ber-effort juga, tapi semoga yang aku lakuin ini bisa memorable deh",
    },
    {
      id: 2,
      story:
        "Jadi karena kita udah kenal 3 minggu aku pengen ketemu kamu bangettt, soalnya gak tahan aja harus nunggu lama-lama sampe kamu selesai liburan. Aku pengen ngajak kamu jalan tanggal 26 Juni besok. Nah berhubung itu weekend jadi aku pikir kamu gak begitu sibuk 😄",
    },
  ];

  useEffect(() => {
    if (sectionNumber <= maxSectionNumber) {
      const newParagraph = sectionData.find((story) => story.id === sectionNumber);
      setSectionParagraph(newParagraph.story);
    } else {
      setSectionParagraph("");
    }
  }, [sectionNumber]);

  return (
    <div className="story animate-right">
      <div className="story-container">
        <div className="story-section">
          {sectionNumber <= maxSectionNumber && (
            <p className="animate-zoom" key={sectionNumber}>
              {sectionParagraph}
            </p>
          )}
          {sectionNumber === maxSectionNumber + 1 && (
            <Link to="/answer" className="story-btn-answer animate-zoom all-btn">
              Click Me!
            </Link>
          )}
        </div>
        <div className="story-button">
          {sectionNumber > 1 && (
            <button onClick={() => setSectionNumber(sectionNumber - 1)} className="btn-prev all-btn">
              &laquo; Prev
            </button>
          )}
          {sectionNumber <= maxSectionNumber && (
            <button onClick={() => setSectionNumber(sectionNumber + 1)} className="btn-next all-btn">
              Next &raquo;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Story;
