'use client';

import {
  Drill,
  Flame,
  LineChart,
  Network,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

const iconMap: Record<string, LucideIcon> = {
  Drill,
  Flame,
  LineChart,
  Network,
  Zap,
  ShieldCheck,
};

interface ServiceCardProps {
  title: string;
  summary: string;
  detail: string;
  icon: string;
}

export function ServiceCard({ title, summary, detail, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Drill;

  return (
    <Dialog>
      <Card data-reveal className="group p-8 flex flex-col hover:shadow-elevated hover:-translate-y-1.5">
        <div className="h-12 w-12 rounded-md bg-brand-blue/10 flex items-center justify-center mb-6">
          <Icon className="h-6 w-6 text-brand-blue" />
        </div>
        <h3 className="text-xl font-bold text-ink mb-3">{title}</h3>
        <p className="text-ink-muted text-sm leading-relaxed mb-6 flex-1">{summary}</p>
        <DialogTrigger asChild>
          <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue self-start">
            View details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-power3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </DialogTrigger>
      </Card>

      <DialogContent>
        <DialogHeader>
          <div className="h-11 w-11 rounded-md bg-brand-blue/10 flex items-center justify-center mb-2">
            <Icon className="h-5 w-5 text-brand-blue" />
          </div>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-base">{detail}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
