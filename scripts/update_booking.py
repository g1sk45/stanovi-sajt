#!/usr/bin/env python3
"""
Scrapes review count and score from the Booking.com property page
and updates booking-data.json if the values have changed.

Usage:
    python scripts/update_booking.py
"""

import json
import re
import sys
from datetime import date
from pathlib import Path

try:
    import requests
except ImportError:
    print("requests nije instaliran. Pokrenite: pip install requests", file=sys.stderr)
    sys.exit(1)

BOOKING_URL = "https://www.booking.com/hotel/rs/ban.html"
DATA_FILE = Path(__file__).parent.parent / "booking-data.json"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}

REVIEW_PATTERNS = [
    r'"reviewCount"\s*:\s*(\d+)',
    r'"nr_reviews"\s*:\s*(\d+)',
    r'"review_count"\s*:\s*(\d+)',
    r'"totalReviewCount"\s*:\s*(\d+)',
    r'(\d+)\s+verifikovanih\s+(?:recenzija|utisaka)',
    r'(\d+)\s+verified\s+reviews',
]

SCORE_PATTERNS = [
    r'"average_score"\s*:\s*([\d.]+)',
    r'"reviewScore"\s*:\s*([\d.]+)',
    r'"score"\s*:\s*([\d.]+)',
]


def fetch_page(url: str) -> str:
    resp = requests.get(url, headers=HEADERS, timeout=20)
    resp.raise_for_status()
    return resp.text


def extract(text: str, patterns: list) -> str | None:
    for pattern in patterns:
        m = re.search(pattern, text, re.IGNORECASE)
        if m:
            return m.group(1)
    return None


def main():
    print(f"Fetching {BOOKING_URL} ...")
    try:
        page = fetch_page(BOOKING_URL)
    except Exception as exc:
        print(f"Greška pri fetchovanju: {exc}", file=sys.stderr)
        # Ne prekidamo CI — zadržavamo stare podatke
        sys.exit(0)

    with DATA_FILE.open(encoding="utf-8") as f:
        data = json.load(f)

    changed = False

    raw_count = extract(page, REVIEW_PATTERNS)
    if raw_count:
        count = int(raw_count)
        if data.get("reviews") != count:
            print(f"Recenzije: {data.get('reviews')} → {count}")
            data["reviews"] = count
            changed = True
        else:
            print(f"Recenzije: {count} (bez promene)")
    else:
        print("Nije moguće pronaći broj recenzija — zadržavamo postojeću vrednost.")

    raw_score = extract(page, SCORE_PATTERNS)
    if raw_score:
        score = raw_score
        if data.get("score") != score:
            print(f"Ocena: {data.get('score')} → {score}")
            data["score"] = score
            changed = True
        else:
            print(f"Ocena: {score} (bez promene)")
    else:
        print("Nije moguće pronaći ocenu — zadržavamo postojeću vrednost.")

    if changed:
        data["updated"] = str(date.today())
        with DATA_FILE.open("w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            f.write("\n")
        print("booking-data.json ažuriran.")
    else:
        print("Nema promena u booking-data.json.")


if __name__ == "__main__":
    main()
