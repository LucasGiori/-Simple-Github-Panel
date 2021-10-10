import SimpleBar from 'simplebar-react';
import useApi from "../../../useApi";
import  RepositoryCard from "../Card/Card";
import "./List.css";

export default function RepositoryList({ username }) {
  const { data, error, loading } = useApi({
      url:`https://api.github.com/users/${username}/repos?per_page=10&page=1`
  })

  return (
    <div className="RepositoryList">
      <h3>Repositories
        {loading && <span>Loading...</span>}
      </h3>
    <SimpleBar style={{ maxHeight: 700}}>
      <div className="RepositoryList__content">
        {error ? (<div>Não foi possível carregar os repositórios, tente novamente mais tarde</div>)
        : (
            data?.map((repository) => (
                <RepositoryCard 
                    key={repository.full_name} 
                    repo={repository}
                />
            ))
        )}
      </div>
      </SimpleBar>
    </div>
  );
}
