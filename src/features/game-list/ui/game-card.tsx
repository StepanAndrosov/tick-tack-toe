import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export async function GameCard({
  creator,
}: {
  creator: {
    login: string;
    rating: number;
  };
}) {
  return (
    <Card className="py-3 ">
      <CardHeader>
        <CardTitle className="text-white">organizer: {creator.login}</CardTitle>
      </CardHeader>
      <CardContent className="text-white">rating: {creator.rating}</CardContent>
    </Card>
  );
}
