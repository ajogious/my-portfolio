import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/animations/FadeUp";
import { Home, ArrowLeft, Search } from "lucide-react";
import { personalInfo } from "@/constants/data";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 px-4">
      <div className="container max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <FadeUp>
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-bold text-primary">
                  404
                </h1>
                <h2 className="text-2xl lg:text-4xl font-semibold text-foreground">
                  Page Not Found
                </h2>
                <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                  Oops! The page you&apos;re looking for seems to have wandered
                  off into the digital void. Let&apos;s get you back on track.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="#projects">
                    <Search className="h-4 w-4" />
                    View Projects
                  </Link>
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  While you&apos;re here, check out:
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="#about"
                    className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    About Me
                  </Link>
                  <Link
                    href="#experience"
                    className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    Experience
                  </Link>
                  <Link
                    href="#contact"
                    className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Illustration */}
          <FadeUp delay={0.3}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center border-2 border-primary/10">
                <div className="text-center space-y-6">
                  <div className="text-8xl">🔍</div>
                  <div className="space-y-2">
                    <div className="w-32 h-4 bg-primary/20 rounded-full mx-auto"></div>
                    <div className="w-24 h-3 bg-primary/10 rounded-full mx-auto"></div>
                    <div className="w-28 h-3 bg-primary/10 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute top-8 -left-8 w-4 h-4 bg-primary/40 rounded-full animate-bounce delay-1000"></div>
            </div>
          </FadeUp>
        </div>

        {/* Quick stats */}
        <FadeUp delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              This is {personalInfo.name}&apos;s portfolio. Built with ❤️ using
              Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
