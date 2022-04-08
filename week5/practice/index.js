const $commentForm = document.querySelector('#commentInputSection');
const $commentInput = document.querySelector('#commentInput');
const $commentList = document.querySelector('#commentsList');

const $commentItemTemplate = (newComment) => {
    return `
    <li class="commentItem">
        <img src="https://yt3.ggpht.com/ytc/AKedOLRnUdBQzRNS4PVMRsRyqTQI1NZgu369qa68jZ__1g=s88-c-k-c0x00ffffff-no-rj" class="profileImg"/>
        <div>
            <p id="commentName">John Doe</p>
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
                <button class="commentBtn">
                    댓글
                </button>
            </div>
        </div>
    </li>
    `;
}

// const newComment = $commentItemTemplate('안녕하세요. 반갑습니다.');

// $commentList.insertAdjacentHTML('afterbegin', newComment);


$commentForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    // form에 입력 후 엔터키를 치면 새로고침 되는 이벤트 막기
    event.preventDefault();

    // 입력값으로 댓글 만들기
    const newComment = $commentInput.value;
    if (!newComment) {return};  // 아무것도 입력하지 않는 경우의 예외처리
    const newCommentItem = $commentItemTemplate(newComment);
    // console.log(newCommentItem);
    $commentList.insertAdjacentHTML('afterbegin', newCommentItem);

    // 댓글 생성 후, input 태그에 입력값 초기화
    $commentInput.value = '';
}