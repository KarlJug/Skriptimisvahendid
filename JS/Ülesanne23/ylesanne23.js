/**
 * Karl Jugapuu
 * Üleasnne 22
 * 27.11.2023
 */

// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// Initialize Firebase
import {
    addDoc,
    collection,
    endBefore,
    getCountFromServer,
    getDocs,
    getFirestore,
    limit,
    limitToLast,
    orderBy,
    query,
    startAfter
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwJuVeHha5rDhbQVn97le97pyFW8trBJQ",
    authDomain: "ylesanne23.firebaseapp.com",
    projectId: "ylesanne23",
    storageBucket: "ylesanne23.appspot.com",
    messagingSenderId: "245200748052",
    appId: "1:245200748052:web:f527fa909e352c77ddb101"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const reviewsLimit = 10;
const dbName = "ylesanne";
let nextPage = true;
let prevPage = false;
let lastVisible, firstVisible;
let currentPageNumber = 1;
let reviewCount = 0;
let reviewCountPrev = 0;
let testSpanp = null;
let numberOfPagesPrev = 0;
let numberOfPagesNext = 0;
let numberOfPages = 0;


// firestore andmete lugemine
async function getData() {
    const dataCol = query(collection(db, dbName), orderBy("rate"), limit(reviewsLimit));
    const documentSnapshots = await getDocs(dataCol);

    // count
    const reciewCol = collection(db, dbName);
    const countSnapshot = await getCountFromServer(reciewCol);

    reviewCount = countSnapshot.data().count;

    if (documentSnapshots.docs.length > 0) {
        lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
        firstVisible = documentSnapshots.docs[0];
    }

    currentPageNumber = 1;

    return documentSnapshots;
    //const lastVisible = dataSnapshot.docs[dataSnapshot.docs.length - 1];
    //const dataList = dataSnapshot.docs.map(doc => doc.data());
    //return dataList;
}

async function getDataNext() {
    const next = query(collection(db, dbName), orderBy("rate"), startAfter(lastVisible), limit(reviewsLimit));
    const documentSnapshots = await getDocs(next);

    lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    firstVisible = documentSnapshots.docs[0];

    return documentSnapshots;
}

async function getDataPrev() {
    const prev = query(collection(db, dbName), orderBy("rate"), endBefore(firstVisible), limitToLast(reviewsLimit));
    const documentSnapshots = await getDocs(prev);

    //let reversedDocs = documentSnapshots.docs.slice().reverse();

    //if (reversedDocs.length > 0) {
    // Update the last and first visible documents
    //}
    lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    firstVisible = documentSnapshots.docs[0];

    return documentSnapshots;

    /*    if (dataSnapshots.docs.length <= reviewsLimit) {
            prevPage = false;

        } else {
            prevPage = true;
            nextPage = true;

            //dataSnapshots.pop();
        }
    */
}

async function getDataPage() {
    const page = query(collection(db, dbName), orderBy("rate"), limit((currentPageNumber * reviewsLimit)));
    const documentSnapshots = await getDocs(page);

    lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    firstVisible = documentSnapshots.docs[documentSnapshots.docs.length - 11];

    return documentSnapshots;
}

function loadPageNumbers() {
    const pageNumbers = document.querySelectorAll("#pageNumbers *");
    if (pageNumbers) {
        pageNumbers.forEach(element => {
            element.remove();
        });
    }

    reviewCountPrev = reviewsLimit * (currentPageNumber - 1);

    let reviewCountNext = reviewCount - reviewCountPrev;

    const pageNumberElement = document.getElementById("pageNumbers");
    // Page count calculation that rounds up
    numberOfPagesPrev = Math.ceil(reviewCountPrev / reviewsLimit);
    console.log("numberOfPagesPrev: " + numberOfPagesPrev);
    numberOfPagesNext = Math.ceil(reviewCountNext / reviewsLimit);
    numberOfPages = Math.ceil(reviewCount / reviewsLimit);

    console.log("reviewCountPrev: " + reviewCountPrev);
    console.log("reviewCount: " + reviewCount);

    //let newCurrentPageNumber = numberOfPagesPrev + 1;
    console.log("CurrentPageNumber: " + currentPageNumber);

    const StartPageNumber = currentPageNumber - numberOfPagesPrev;
    console.log("StartPageNumber: " + StartPageNumber);

    // Number of pages it shows
    let loopEnd;
    if (2 < numberOfPagesPrev) {
        loopEnd = 2;
    } else {
        loopEnd = numberOfPagesPrev;
    }

    // Prev pages
    for (let i = loopEnd; i >= 1; --i) {
        let pageNumber = document.createElement("button");
        pageNumber.className = "btn btn-outline-dark me-1";



        pageNumber.innerHTML = `
                    <span>${numberOfPagesPrev - (i - 1)}</span>
            `;

        pageNumberElement.appendChild(pageNumber);
    }

    if (3 < numberOfPagesNext) {
        loopEnd = 3;
    } else {
        loopEnd = numberOfPagesNext;
    }

    // Current and next pages
    for (let i = 1; i <= loopEnd; ++i) {
        let pageNumber = document.createElement("button");
        pageNumber.className = "btn btn-outline-dark me-1";

        if ((i - 1) + currentPageNumber === currentPageNumber) {
            pageNumber.disabled = true;
        }

        const numberForThePage = (i - 1) + parseInt(currentPageNumber);
        pageNumber.innerHTML = `
                    <span>${numberForThePage}</span>
            `;


        pageNumberElement.appendChild(pageNumber);
    }

    // Last page number
    if ((currentPageNumber + 3) < numberOfPages) {

        pageNumberElement.innerHTML += `
            <span class="me-1">/</span>
        `;

        // Last page
        const lastPageElement = document.createElement("button");
        lastPageElement.className = "btn btn-outline-dark";
        lastPageElement.innerHTML = `
            <span>${numberOfPages}</span>
        `;

        pageNumberElement.appendChild(lastPageElement);
    }

    // Event listeners for page numbers
    let numbers = document.querySelectorAll("#pageNumbers *");
    numbers.forEach(element => {
        element.addEventListener("click", function () {
            currentPageNumber = this.querySelector("span").textContent;

            getDataPage().then(dataSnapshot => {
                let dataArray = createDataList(dataSnapshot);
                reviewCountPrev = reviewsLimit * (currentPageNumber - 1);
                dataArray.splice(0, reviewCountPrev);

                reloadReviews(dataArray);

                loadPageNumbers();
            });
        });
    });
}

function createDataList(dataSnapshot) {
    console.log(dataSnapshot.docs.map(doc => doc.data()));
    return dataSnapshot.docs.map(doc => doc.data());
}

function reloadReviews(reviewList) {
    const stars = document.querySelectorAll("#reload div.card-title");
    const reviews = document.querySelectorAll("#reload p.card-text");

    reviewList.forEach((element, index) => {
        let starList = "";
        for (let i = 0; i < 5; ++i) {
            if (i < element.rate) {
                starList += '<i class="fa-regular fa-star selected"></i>';

            } else {
                starList += '<i class="fa-regular fa-star"></i>';
            }
        }

        stars[index].innerHTML = starList;
        reviews[index].textContent = element.comm;
    });
}

// Filter functions
document.getElementById("filterButton").addEventListener("click", function () {

});

let averageRate = 0;

// Reviews functions
function loadReviews() {
    const reviews = document.getElementById("reviews");

    // Loading animation
    for (let i = 0; i < 6; ++i) {
        let LoadingCol = document.createElement("div");
        LoadingCol.className = "col";
        LoadingCol.id = "loading";

        LoadingCol.innerHTML = `
            <div id="loading" class="col">
                <div class="card-body border rounded border-dark-subtle p-2">
                    <span class="placeholder w-25"></span>
                    <span class="placeholder w-75"></span>
                </div>
            </div>
        `;

        reviews.appendChild(LoadingCol);
    }

    // Load reviews
    getData().then(dataSnapshot => {
        createDataList(dataSnapshot).forEach(element => {
            removeElements("loading");

            const review = document.createElement("div");
            review.className = "col";
            review.id = "reload";

            let starList = "";
            for (let i = 0; i < 5; ++i) {
                if (i < element.rate) {
                    starList += '<i class="fa-regular fa-star selected"></i>';

                } else {
                    starList += '<i class="fa-regular fa-star"></i>';
                }
            }

            review.innerHTML = `
                <div class="card-body border rounded border-dark-subtle p-2" style="height: 100px;">
                    <div class="card-title">${starList}</div>
                    <p class="card-text">${element.comm}</p>
                </div>
            `;
            reviews.appendChild(review);
        });

        // Page numbers

    }).then(() => {
        loadPageNumbers();
    });
}

loadReviews();

// Load more reviews
const paginationPrev = document.getElementById("paginationPrev");
const paginationNext = document.getElementById("paginationNext");

paginationPrev.addEventListener("click", function () {
    if (0 >= numberOfPagesPrev) {
        console.log("prevPage: " + numberOfPagesPrev);
        //prevPage = false;
        return;
    } else {
        prevPage = true;
    }

    --currentPageNumber;

    getDataPrev().then(dataSnapshot => {
        //lastVisible = getLastVisible(dataSnapshot);
        reloadReviews(createDataList(dataSnapshot));

        loadPageNumbers();
    });
});
paginationNext.addEventListener("click", function () {
    if (numberOfPages <= currentPageNumber) {
        console.log("nextPage: " + numberOfPagesNext);
        console.log("page number: " + currentPageNumber);
        //nextPage = false;
        return;
    } else {
        nextPage = true;
    }

    ++currentPageNumber;

    getDataNext().then(dataSnapshot => {
        //lastVisible = getLastVisible(dataSnapshot);
        reloadReviews(createDataList(dataSnapshot));

        loadPageNumbers();
    });
});

// Lisa hinnangu nupp
document.getElementById("addReview").addEventListener("click", function () {
    document.getElementById("reviewForm").classList.toggle("d-none");
    document.getElementById("addReview").classList.toggle("d-none");
});

// Review rating with stars
const stars = document.querySelectorAll("#reviewStars *");
let rate = 0;
stars.forEach(star => {
    star.addEventListener("mouseover", function () {
        if (rate > 0) {
            stars.forEach(star => {
                if (star.classList.contains("selected")) {
                    star.classList.remove("selected");
                }
            });
        }

        star.classList.add("checked");
        for (let star of stars) {
            if (!star.classList.contains("checked")) {
                star.classList.add("checked");

            } else {
                break;
            }
        }
    });

    star.addEventListener("mouseout", function () {
        star.classList.remove("checked");
        if (rate > 0) {
            for (let i = 0; i < rate; ++i) {
                stars[i].classList.add("selected");
            }
        }

        for (let star of stars) {
            if (star.classList.contains("checked")) {
                star.classList.remove("checked");

            } else {
                break;
            }
        }
    });

    star.addEventListener("click", function () {
        // Get rate number
        rate = stars.length - [...stars].reverse().indexOf(star);

        // Replace checked with selected
        for (let star of stars) {
            if (star.classList.contains("checked")) {
                star.classList.remove("checked");
                star.classList.add("selected");
            }
        }
    });
});

// Submit review
const formElement = document.getElementById('reviewForm');
formElement.addEventListener('submit', async (e) => {
    e.preventDefault();

    let reviewText = document.getElementById("reviewText").value;

    if (!reviewText) {
        alert("Palun sisesta kommentaar!");
        return;

    }
    if (!rate) {
        alert("Palun vali hinnang!");
        return;
    }

    try {
        const docRef = await addDoc(collection(db, dbName), {
            comm: reviewText,
            rate: rate,
        });

        //console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    // Reset form
    document.getElementById("reviewText").value = "";

    // Toggle review form
    document.getElementById("reviewForm").classList.toggle("d-none");
    document.getElementById("addReview").classList.toggle("d-none")

    // Reload reviews
    /*const stars = document.querySelectorAll("#reload");
    stars.forEach(star => {
        star.remove();
    });*/

    //loadReviews();
    getData().then(dataSnapshot => {
        reloadReviews(createDataList(dataSnapshot));
    });
});


// Remove elements with id
function removeElements(id) {
    const elements = document.querySelectorAll("#" + id);
    elements.forEach(element => {
        element.remove();
    });
}

// add review
async function sendReview(reviewText, rate) {
    try {
        await addDoc(collection(db, dbName), {
            comm: reviewText,
            rate: rate,
        });

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
