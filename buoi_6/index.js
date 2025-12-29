async function GetUser() {
    try {
        let response = await fetch('https://mindx-mockup-server.vercel.app/api/resources/Nguyen Van Duc?apiKey=69513732fdb0c381f6e2b976')
        let data = await response.json();
        console.log(data.data.data);
    }
    catch (error) {
        console.log('Lỗi xảy ra:', error);
    }
}
GetUser();

const CreateUser = async() => {
    newUser = {
        UserId : 2,
        name : "Nguyen Van B",
        _id : "62f5c2d3e4b0f5b1a8c9d7e4"
    };

    const response = await fetch('https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69513732fdb0c381f6e2b976',
        {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}
// CreateUser();

const UpdateUser = async() => {
    updateUser = {
        UserId : 2,
        name : "Nguyen Van Duc",
        _id : "62f5c2d3e4b0f5b1a8c9d723"
    };

        const response = await fetch('https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69513732fdb0c381f6e2b976',
        {
            method: 'POST',
            body: JSON.stringify(updateUser),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}
UpdateUser();