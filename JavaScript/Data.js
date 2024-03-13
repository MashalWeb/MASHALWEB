const NinthClass = {
  English: [
    {
      ChapterName: "Chapter 1 → Prophet Muhammad S.A.W the Model of Tolerance",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1NXSwWrEpc3gF2s4rxSrJhG4LFi9vl5Gt/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 2 → Iqbal Message to Youth",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1H--f2w9D2TZTn61SqfDU6JLDLHpYnt8q/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 3 → Quaid - A Great Leader",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/196AGZ909tq1-8TuZ2MKi9CXRIQg9ygfr/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 4 → The Daffodils",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1zXfJX3FGRb_xUWC9EPbNw-B2txrKGDiT/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 5 → The Madina Charter",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1lcoR9mLdQQxMdOyrefhBLg9H92S7sTqZ/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 6 → Nasiruddine",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1aLNY_cjnPJi53rWmQAE--s2wnBQUlVo_/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 7 → The Two Bargains",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1LDHC8bedPIm4kptVuNlqeczbJswYhCUd/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 8 → Hope is the Thing With Feathers",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/16iAZYj4ICluc37dIfHCUgeQlR7UXPtko/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 9 → The Fantastic Showmaker",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1EyxSQdHC33tQdlUOxs64dp1LvNzPc263/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 10 → Thecnology in Everyday Life",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1Au3HFs-FEpgJe6ZRi26fbWSgLOE5gxGw/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 11 → Safety First",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1cqarw_RjMM536lD7xZDeYUas8aXoYHcT/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 12 → The Old Woman",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1K3FpuUhrC03sLVJ4r75LJL88ABL-GYT3/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 13 → Letter to Newspaper Editor",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1Q1LY_qMbmjIA5zS25QMWdgeL86F5vrW7/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 14 → Biodiversity In Pakistan",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1p4nh3fE2s7H7ra_mifkQg2mYJuMIKts-/view",
        },
      ],
    },
    {
      ChapterName: "Chapter 15 → Abou Ben Edhem",
      urls: [
        {
          urlName: "Full Chapter Translation | Question Answer | Notes",
          url: "https://drive.google.com/file/d/1drfvd5JozU4x5QPgrzHwmJFMPqKUBJwO/view",
        },
      ],
    },
    {
      ChapterName: "English Grammar Notes",
      urls: [
        {
          urlName: "Applications",
          url: "https://drive.google.com/file/d/1namTHmZYbnZ1TMHS4Q4KCmwwYxVL4HVT/view",
        },
        {
          urlName: "Idiomatic, Sentences / Model Sentence",
          url: "https://drive.google.com/file/d/1D0IYi2GVnvuPPwht0wFB9k39Vp_NQhDQ/view",
        },
        {
          urlName: "Important Proverbs",
          url: "https://drive.google.com/file/d/1qGcNk04_TJDR4JOp0W9t2lCbbd6JzBwp/view",
        },
        {
          urlName: "Letters",
          url: "https://drive.google.com/file/d/15Z9uxNj3BuMiapirDLljH3G7cp8i67vH/view",
        },
        {
          urlName: "Stories",
          url: "https://drive.google.com/file/d/1C-xvgUOXNorrXcH0sSwY4Yrq39Nse__2/view",
        },
      ],
    },
  ],
}

let ninthDiv = document.querySelector(".chMainDev");

NinthClass.English.forEach(chapterDetails =>{
  let ul = document.createElement("ul");
  
  ul.textContent = chapterDetails.ChapterName;
  ninthDiv.appendChild(ul);
  let urlDet = chapterDetails.urls;
  urlDet.forEach(url =>{
    let li = document.createElement("li");
    li.innerHTML = `
    <a href="${url.url}" target="_blank">${url.urlName} </a>
    `
    ul.appendChild(li);
  })
})