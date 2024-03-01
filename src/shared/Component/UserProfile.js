import React from 'react'

function UserProfile(props) {
    const {user} = props;
    return (
        <>
            <div class="row">
                <div class="col-md-12">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" alt="wrapkit" class="img-fluid rounded-circle" />
                </div>
                <div class="col-md-12 text-center">
                    <div class="pt-2">
                        <h5 class="mt-4 font-weight-medium mb-0">{ user?.username }</h5>
                        <h6 class="subtitle mb-3">{user?.email}</h6>
                        <p>{user?.company?.catchPhrase}</p>
                        <ul class="list-inline">
                            <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                            <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile