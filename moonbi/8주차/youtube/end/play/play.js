const $commentForm = document.querySelector("#commentInputContainer");
const $commentInput = $commentForm.querySelector("input");
const $commentList = document.querySelector("#commentsList");
const $commentListItem = $commentList.getElementsByTagName('li');

const comments = [];

const commentItemTemplate = (newComment) => {
  return `
		<li class="commentItem">
			<img class="profileImg" src="https://yt3.ggpht.com/yti/APfAmoFKOulEyuvp2zG6s5Ozpx5NTQqnXMH5RfMGpDAq2cI=s88-c-k-c0x00ffffff-no-rj"/>
			<div>
				<p id="commentName">Rachel</p>
				<p>${newComment}</p>
				<div class="flex">
					<button class="commentBtn">
						<span class="commentIcon">
							<svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z" class="style-scope yt-icon"></path></g></svg>
						</span>
					</button>
					<button class="commentBtn">
						<span class="commentIcon">
							<svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z" class="style-scope yt-icon"></path></g></svg>
						</span>
					</button>
					<button class="commentBtn replyBtn"><span>REPLY</span></button>
				</div>
			</div>
		</li>
	`;
};

const displayHistory = () => {
	const history = JSON.parse(localStorage.getItem('comments'));
	console.log(history);

	history?.map(item => {
		const newCommentItem = commentItemTemplate(item);
		comments.push(item);
    $commentList.insertAdjacentHTML("afterbegin", newCommentItem);
	})
}

displayHistory();

const saveItem = (newComment) => {
	comments.push(newComment);
	localStorage.setItem("comments", JSON.stringify(comments));
}

const handleSubmit = (e) => {
  e.preventDefault();
  const newComment = $commentInput.value;

	if (!newComment) {return};
  const newCommentItem = commentItemTemplate(newComment);

  $commentList.insertAdjacentHTML("afterbegin", newCommentItem);
  $commentInput.value = "";

	saveItem(newComment);
};

$commentForm.addEventListener("submit", handleSubmit);

const $recommendedVideoList = document.querySelector(".recommendedVideoList");

const fetchRecommendedVideoList = () => {
  var requestOptions = {
    method: "GET",
  };

  fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=15&key=AIzaSyA1CXsnHqpp_MZAMi0H3gfWHC1b1xOiJTg&regionCode=kr",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result.items.map((item) => videoCardTemplate(item)))
    .catch((error) => console.log("error", error));
};

fetchRecommendedVideoList();

function videoCardTemplate(data) {
  console.log(data);
  const videoItem = `
			<li class="videoItemContainer">
				<a href=${`https://www.youtube.com/watch?v=${data.id}`}>
						<div class="videoThumbnailContainer">
								<img class="thumbnailImg" src=${data.snippet.thumbnails.high.url} />
						</div>
				</a>
				<div class="videoDetailsContainer">
						<a href=${`https://www.youtube.com/watch?v=${data.id}`}>
								<div class="videoMetaDetails">
										<div class="videoTitle">
												<h3>${data.snippet.title}</h3>
										</div>
										<div class="videoMetaData">
												<p class="metaText">${data.snippet.channelTitle}</p>
												<p class="extraMeta">
														<span class="metaText viewCount">${
                              Number(data.statistics.viewCount) > 100000
                                ? (
                                    Number(data.statistics.viewCount) / 1000
                                  ).toFixed(0) + "K"
                                : Number(data.statistics.viewCount)
                            } views</span>
														<span class="metaText">${luxon.DateTime.fromISO(
                              data.snippet.publishedAt
                            ).toRelative()}</span>
												</p>
										</div>
								</div>
						</a>
				</div>
		</li>
`;

  $recommendedVideoList.insertAdjacentHTML("beforeend", videoItem);
}