export let parse: (source: string) => Record<string, string>

interface read {
  (key: string): (source: string) => string

  (key: string, source: string): string
}

export let read: read

interface serialize {
  (name: string): (value: any) => (attributes: [string, string][]) => string

  (name: string): (value: any, attributes: [string, string][]) => string

  (name: string, value: any): (attributes: [string, string][]) => string

  (name: string, value: any, attributes: [string, string][]): string
}

export let serialize: serialize
