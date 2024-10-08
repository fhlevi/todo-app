import { Button } from '@/components/atoms/button';
import { Card } from '@/components/atoms/card';
import { Container } from "@/components/atoms/container";
import { Flex } from '@/components/atoms/flex';
import { Label } from '@/components/atoms/label';
import { TodoList } from '@/components/molecules/todo-list';

export default function Home() {
  return (
    <Container>
      <Card className="rounded-2xl pt-11 px-6 text-white w-96 relative">
        <Label size="28px">
          To Do List
        </Label>

        <Flex direction="col" className="gap-7 mt-7">
          <TodoList 
            date="Monday, 12th May"
          />
        </Flex>

        <Button
          position="absolute"
          height="70px"
          width="70px"
          className="rounded-full bottom-16 right-6">
            <em className="fa-solid fa-plus text-4xl"></em>
        </Button>
      </Card>
    </Container>
  );
}
