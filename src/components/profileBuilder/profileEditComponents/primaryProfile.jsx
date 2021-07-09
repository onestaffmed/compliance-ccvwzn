import React, { useEffect, useState } from 'react';
import BookDetail from '../components/BookDetail';
import axios from 'axios';

const profileApi = `http://localhost:3000/profile`;



const ProfileDetails = ({ match }) => {
    const {
        params: { id },
    } = match;

    const [user, setUser] = useState(null);


    useEffect(() => {
        axios.get(`${profileApi}/${id}`)
            .then(({ data: profile }) => setUser(profile))
            .catch((err) => console.log(err));

    }, [id]);

    // console.log(setBook);

    return (
        <main>
            <div>

                {user && <UserDetail book={user} />}

            </div>
        </main>

    );
};

export default ProfileDetails;