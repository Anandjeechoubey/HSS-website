# Generated by Django 3.2.4 on 2021-06-29 11:18

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('hssapis', '0011_alter_past_talk_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='past_talk',
            name='date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
