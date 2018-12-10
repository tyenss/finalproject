let pictureURL="../pictures/";
// import

export function getRandomPicture()
{
    let randomNum=Math.floor(Math.random() * 4) + 1;
    switch (randomNum)
    {
        case 1:
            return pictureURL+"airplane-boeing.jpg";
        case 2:
            return pictureURL+"plane.jpg";
        case 3:
            return pictureURL+"Boeing.png";
        case 4:
            return pictureURL+"F-35A.jpeg";
        default:
            return pictureURL+"747plane.jpg";
    }
}