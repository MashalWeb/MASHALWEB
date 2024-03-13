const NinthClass = {
  English: [
    {
      ChapterName: "Iqbal Message To Youth",
      urls: [
        {
          urlName: "full ChapterNotes",
          url: "https://www.tiktok.com/@mashal_horara?lang=en",
        },
        {
          urlName: "full ChapterNotes",
          url: "https://www.tiktok.com/@mashal_horara?lang=en",
        },
        {
          urlName: "full ChapterNotes",
          url: "https://www.tiktok.com/@mashal_horara?lang=en",
        },
      ],
    },
    {
        ChapterName: "Humblle",
        urls: [
          {
            urlName: "full ChapterNotes",
            url: "https://www.tiktok.com/@mashal_horara?lang=en",
          },
          {
            urlName: "full ChapterNotes",
            url: "https://www.tiktok.com/@mashal_horara?lang=en",
          },
          {
            urlName: "full ChapterNotes",
            url: "https://www.tiktok.com/@mashal_horara?lang=en",
          },
        ],
      },
  ],
  Urdu: [
    {
      ChapterName: "Musalmano Ka Qadeen Tarzi Taleem",
      urls: [
        {
          urlName: "full ChapterNotes",
          url: "https://www.tiktok.com/@mashal_horara?lang=en",
        },
        {
          urlName: "full ChapterNotes",
          url: "https://www.tiktok.com/@mashal_horara?lang=en",
        },
        {
          urlName: "full ChapterNotes",
          url: "https://www.tiktok.com/@mashal_horara?lang=en",
        },
      ],
    },
  ],
  Islamyat: [
    {
      ChapterName: "Surati Fatiha",
      urls: [
        {
          urlName: "full ChapterNotes",
          url: "https://www.tiktok.com/@mashal_horara?lang=en",
        },
        {
          urlName: "full ChapterNotes",
          url: "https://www.tiktok.com/@mashal_horara?lang=en",
        },
        {
          urlName: "full ChapterNotes",
          url: "https://www.tiktok.com/@mashal_horara?lang=en",
        },
      ],
    },
  ],
};

function returnChName(classKey){
    classKey.forEach(chapterNames => {
        let NameOfChapter = chapterNames.ChapterName;
        console.log(NameOfChapter);
        return NameOfChapter;
    });

}
returnChName(NinthClass.English)
 













