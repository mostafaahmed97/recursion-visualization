import { Button } from '@/components/ui/button';

export function TracingTrigger() {
  return (
    <div className="w-full">
      <Button
        className="w-full"
        onClick={() => {
          console.log('Starting trace');
        }}
      >
        Trace
      </Button>
    </div>
  );
}
