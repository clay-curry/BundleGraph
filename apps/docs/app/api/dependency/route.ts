// get dependency stats
export async function GET(request: Request) {
    return Response.json({
        date: new Date().toLocaleString('en-us', {
            timeZone: 'America/New_York' }),
    });
}