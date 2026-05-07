interface FlavorDetailPageProps {
    params: Promise<{ id: string }>;
}

export default async function FlavorDetailPage({ params }: FlavorDetailPageProps) {
    const { id } = await params;

    return (
        <main className="px-6 py-10">
            <h1 className="text-2xl font-semibold">Flavor {id}</h1>
            <p className="mt-2">Flavor detail page is under construction.</p>
        </main>
    );
}
