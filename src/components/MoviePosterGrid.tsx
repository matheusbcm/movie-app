import React from "react";

interface Movie {
  id: number;
  title: string;
  posterUrl: string; // URL do poster do filme
}

interface MoviePosterGridProps {
  movies: Movie[]; // Lista de filmes
}

const MoviePosterGrid: React.FC<MoviePosterGridProps> = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.posterUrl} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

// Estilos inline (ou você pode usar CSS modules/styled-components)
// const styles = {
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4, 1fr)', // 4 colunas
//     gap: '16px', // Espaço entre os posters
//     padding: '16px',
//   },
//   posterContainer: {
//     textAlign: 'center',
//   },
//   poster: {
//     width: '100%', // Ocupa 100% do espaço disponível
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   },
//   title: {
//     marginTop: '8px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//   },
// };

export default MoviePosterGrid;
