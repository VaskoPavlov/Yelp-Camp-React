import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { useAuthContext } from '../../contexts/AuthContext'
export default function Comment() {
    const {userId, email} = useAuthContext();
    return <CommentSection
                currentUser={{
                    currentUserId: '01a',
                    currentUserImg:
                        'https://ui-avatars.com/api/name=Riya&background=random',
                    currentUserProfile:
                        'https://www.linkedin.com/in/riya-negi-8879631a9/',
                    currentUserFullName: 'Riya Negi'
                }}
                logIn={{
                    loginLink: 'http://localhost:3001/',
                    signupLink: 'http://localhost:3001/'
                }}
                commentData={data}
                onSubmitAction={(data) => console.log('check submit, ', data)}
                currentData={(data) => {
                    console.log('curent data', data)
                }}
            />
}

