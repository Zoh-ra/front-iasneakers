"use client";
import { useSearchParams, useRouter } from 'next/navigation';

const Resultat = () => {
    const searchParams = useSearchParams();
    const result = searchParams.get('result') || 'Aucun résultat disponible.';
    const navigation = useRouter();

    const restartDetection = () => {
        navigation.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Résultat de la détection</h1>
                <p className="mb-6">Voici le résultat : <strong>{result}</strong></p>
                <button
                    onClick={restartDetection}
                    className="text-white bg-black hover:bg-white hover:text-black border border-black transition-all duration-200 ease-in-out rounded-md px-6 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                >
                    Recommencer une détection
                </button>
            </div>
        </div>
    );
};

export default Resultat;
