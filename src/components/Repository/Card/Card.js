import { GoStar, GoRepoForked, GoTerminal } from 'react-icons/go';

import './Card.css';

export default function RepositoryCard({ repo}) {
    return (
        <div className="RepositoryCard">
            <h3>{repo.name}</h3>

            <div className="RepositoryCard__additional-info">
                <GoStar /><span>{repo.stargazer_count || 0}</span>
                <GoRepoForked /><span>{repo.forks_count || 0}</span>
                <GoTerminal />{repo.language && <span>{repo.language}</span>}
               
            </div>
        </div>
    );
}