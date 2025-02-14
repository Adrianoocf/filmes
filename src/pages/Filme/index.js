import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from 'react-toastify'
import './filme.css'


function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilmes] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "d2f23ebe30190120e53bd61e5d699595",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilmes(response.data)
                    setLoading(false)
                })
                .catch(() => {
                    console.log('filme nao encontrado')
                    navigate("/",{replace: true})
                    return;
                })
        }
        loadFilme();

        return () => {
            console.log('componente desmontados')
        }

    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
            toast.warn('Filme já está na lista.')
            return;
        }

        filmesSalvos.push(filme);

        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso.')



    }

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avalliação : {filme.vote_average} / 10</strong>
            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;