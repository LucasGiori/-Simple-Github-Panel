import { useState } from "react";
import UserList from "../../components/User/List/List";
import UserCard from "../../components/User/Card/Card";
import RepositoryList from "../../components/Repository/List/List";
import FollowersQ from "./graphql/FollowersQ";
import FollowingQ from "./graphql/FollowingQ";
import  { useQuery } from "@apollo/client";

import "./dashboard.css";

export default function PagesDashboard() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [username] = useState(
    () => window.localStorage.getItem("github_username") || ""
  );
  console.log(selectedUser);
  
  const { 
    data: followers, 
    followerError 
  } = useQuery(FollowersQ, {
    variables: {
      username,
    }
  });

  const { 
    data: following, 
    followingError 
  } = useQuery(FollowingQ, {
    variables: {
      username,
    }
  });

  const error = followerError || followingError;
  

  return (
    <div>
      <header className="PagesDashboard__topbar">{username}</header>
      {error ? (
        <div>Algo de errado</div>
      ) : (
        <section className="PagesDashboard__content">
          <UserList title="Follower">
              {followers?.user.followers.nodes.map((follower) => (
                  <UserCard  
                    key={follower.id} 
                    user={follower}
                    isSelected={selectedUser === follower.login}
                    onClick={() => setSelectedUser(follower.login)}
                  />
              ))}
          </UserList>
          <UserList title="Following">
              {following?.user.following.nodes.map((following) => (
                  <UserCard  
                    key={following.id} 
                    user={following}
                    isSelected={selectedUser === following.login}
                    onClick={() => setSelectedUser(following.login)}
                  />
              ))}
          </UserList>
          <RepositoryList username={selectedUser}/>
        </section>
      )}
    </div>
  );
}
