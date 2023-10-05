if (document.title === "首頁｜Leon 網頁前端工程師") {
  // // 選取所有文字
  const text = document.querySelectorAll(".thePaths");

  for (let i = 0; i < text.length; i++) {
    console.log(`text number ${i} length is ${text[i].getTotalLength()} `);
  }
  //animation
  const lastWord = document.querySelector("#sixteenth");
  const animation = document.querySelector("div.animation");
  lastWord.addEventListener("animationend", () => {
    animation.style =
      "transition: all 1s ease; opacity: 0; pointer-events:none;";
  });
} else if (document.title === "我的履歷｜Leon 網頁前端工程師") {
  const images = [
    "./Pictures/履歷照片.jpeg",
    "./Pictures/遠足照片.jpg",
    "./Pictures/吃飯照片.jpg",
  ];
  let currentIndex = 0;

  const imageElement = document.getElementById("image");
  const nextButton = document.getElementById("next-button");
  const previousButton = document.getElementById("previous-button");

  previousButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    const preImage = images[currentIndex];

    // 淡出效果
    imageElement.style.opacity = 0;
    nextButton.style.opacity = 0;
    previousButton.style.opacity = 0;

    // 延遲一段時間再更換圖片，以觸發淡入效果
    setTimeout(() => {
      imageElement.src = preImage;
      imageElement.style.opacity = 1;
      nextButton.style.opacity = 0.4;
      previousButton.style.opacity = 0.4;
    }, 500);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    const nextImage = images[currentIndex];

    // 淡出效果
    imageElement.style.opacity = 0;
    nextButton.style.opacity = 0;
    previousButton.style.opacity = 0;

    // 延遲一段時間再更換圖片，以觸發淡入效果
    setTimeout(() => {
      imageElement.src = nextImage;
      imageElement.style.opacity = 1;
      nextButton.style.opacity = 0.4;
      previousButton.style.opacity = 0.4;
    }, 500);
  });
}
